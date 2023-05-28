import React, { Component, createRef } from "react";
import "./style.sass";

import fullscreenIcon from "./assets/fullscreenIcon.png";
import highVolumeIcon from "./assets/highVolumeIcon.png";
import lowVolumeIcon from "./assets/lowVolumeIcon.png";
import mediumVolumeIcon from "./assets/mediumVolumeIcon.png";
import mutedIcon from "./assets/mutedIcon.png";
import pauseIcon from "./assets/pauseIcon.png";
import playIcon from "./assets/playIcon.png";

export default class Player extends Component {
    constructor(props) {
        super(props);

        this.videoRef = createRef();
        this.playerRef = createRef();

        this.state = {
            isPlaying: false,
            isMuted: false,
            isFullscreen: false,
            isVideoFinished: false,

            volume: 100,
            absoluteDuration: 0,
            absoluteCurrentTime: 0,

            currentTime: "00:00",
            duration: "00:00",

            icon: highVolumeIcon,

            volumeRangeStyle: {
                display: "none",
                width: "0",
                animation: ""
            }
        };
    }

    componentDidMount() {
        this.videoRef.current.addEventListener("loadedmetadata", () => {
            const duration = this.videoRef.current.duration;
            const formattedDuration = this.formatTime(duration);
            this.setState({ duration: formattedDuration });
            this.setState({ absoluteDuration: duration });
        });

        this.interval = setInterval(() => {
            this.handleTimeUpdate();
        }, 250);

        document.addEventListener("fullscreenchange", () => {
            if (!this.state.isFullscreen) {
                this.setState({ isFullscreen: true });
            } else {
                this.setState({ isFullscreen: false });
            }
        });

        this.videoRef.current.addEventListener("ended", () => {
            this.videoRef.current.pause();
            this.setState({ isPlaying: false });
            this.setState({ isVideoFinished: true });
        });

        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case " ":
                    this.play();
                    break;

                case "ArrowRight":
                    this.videoRef.current.currentTime += 5;
                    this.setState({ absoluteCurrentTime: this.state.absoluteCurrentTime += 5 });
                    break;

                case "ArrowLeft":
                    this.videoRef.current.currentTime -= 5;
                    this.setState({ absoluteCurrentTime: this.state.absoluteCurrentTime -= 5 });
                    break;

                case "ArrowDown":
                    if (this.videoRef.current.volume <= 0) {
                        this.videoRef.current.volume = 0;
                        this.setState({ isMuted: true, volume: 0 });
                    } else {
                        this.videoRef.current.volume = (this.state.volume - 5) / 100;
                        this.setState({ volume: this.state.volume -= 5 });
                    }
                    break;

                case "ArrowUp":
                    if (this.videoRef.current.volume < 1) {
                        this.videoRef.current.volume = (this.state.volume + 5) / 100;
                        this.setState({ volume: this.state.volume += 5 });
                    }
                    break;

                case "m":
                    this.mute();
                    break;

                case "0":
                    this.videoRef.current.currentTime = 0;
                    this.setState({ absoluteCurrentTime: 0 });
                    break;
            }
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    play = () => {
        if (!this.state.isPlaying) {
            if (this.state.isVideoFinished) {
                this.videoRef.current.currentTime = 0;
                this.setState({ isVideoFinished: false });
                this.setState({ absoluteCurrentTime: 0 });
                this.setState({ isPlaying: true });
                this.videoRef.current.play();
            } else {
                this.videoRef.current.play();
                this.setState({ isPlaying: true });
            }
        } else {
            this.videoRef.current.pause();
            this.setState({ isPlaying: false });
        }
    }

    mute = () => {
        if (!this.state.isMuted) {
            this.videoRef.current.volume = 0;
            this.setState({ isMuted: true, volume: 0 });
        } else {
            this.videoRef.current.volume = 1;
            this.setState({ isMuted: false, volume: 100 });
        }
    }

    handleVolumeChange = e => {
        this.setState({ volume: e.target.value });
        this.videoRef.current.volume = this.state.volume / 100;

        if (this.state.volume <= 1) {
            this.setState({ isMuted: true });
            this.setState({ icon: mutedIcon });
        } else if (this.state.volume > 1 && this.state.volume <= 33) {
            this.setState({ isMuted: false });
            this.setState({ icon: lowVolumeIcon });
        } else if (this.state.volume > 33 && this.state.volume <= 66) {
            this.setState({ isMuted: false });
            this.setState({ icon: mediumVolumeIcon });
        } else if (this.state.volume > 66) {
            this.setState({ isMuted: false });
            this.setState({ icon: highVolumeIcon });
        }
    }

    formatTime = time => {
        let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600);

        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;

        if (hours == 0) {
            return `${minutes}:${seconds}`;
        }

        return `${hours}:${minutes}:${seconds}`;
    }

    handleTimeUpdate = () => {
        let currentTime = this.videoRef.current.currentTime;
        let formattedCurrentTime = this.formatTime(currentTime);
        this.setState({ currentTime: formattedCurrentTime });
        this.setState({ absoluteCurrentTime: currentTime });
    }

    handleProgressChange = e => {
        this.videoRef.current.currentTime = e.target.value;
        let formattedCurrentTime = this.formatTime(e.target.value);
        this.setState({ currentTime: formattedCurrentTime });
        this.setState({ absoluteCurrentTime: e.target.value });
    }

    fullscreen = () => {
        if (!this.state.isFullscreen) {
            this.playerRef.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    render() {
        return(
            <div className="player" ref={this.playerRef}>
                <div className="video-container" onClick={this.play}>
                    <video className="video" ref={this.videoRef}>
                        <source src={this.props.video} />
                    </video>
                </div>
                <div className="controls">
                    <input
                        type="range"
                        className="progress-bar"
                        min="0"
                        max={this.state.absoluteDuration}
                        step={1 / 60}
                        value={this.state.absoluteCurrentTime}
                        onChange={this.handleProgressChange}
                        style={{backgroundSize: `${(this.state.absoluteCurrentTime * 100) / this.state.absoluteDuration}% 100%`}}
                    />
                    <div className="buttons">
                        <div
                            className="left-buttons"
                            onMouseLeave={() => this.setState(
                                {
                                    volumeRangeStyle: {
                                        display: "none",
                                        width: "0",
                                        animation: ""
                                    }
                                }
                            )}
                        >
                            <button className="button" onClick={this.play}>
                                {
                                    this.state.isPlaying
                                        ? <img src={pauseIcon} className="btn-img" />
                                        : <img src={playIcon} className="btn-img" />
                                }
                            </button>
                            <button
                                className="button"
                                onClick={this.mute}
                                onMouseEnter={() => this.setState(
                                    {
                                        volumeRangeStyle: {
                                            display: "flex",
                                            width: "175px",
                                            animation: "open .3s"
                                        }
                                    }
                                )}
                            >
                                {
                                    this.state.isMuted
                                        ? <img src={mutedIcon} className="btn-img" />
                                        : <img src={this.state.icon} className="btn-img" />
                                }
                            </button>
                            <div
                                className="volume-track"
                                style={this.state.volumeRangeStyle}
                            >
                                <input
                                    type="range"
                                    value={this.state.volume}
                                    onChange={this.handleVolumeChange}
                                    className="volume-range"
                                    style={{backgroundSize: `${(this.state.volume)}% 100%`}}
                                />
                                <p className="volume-number">{this.state.volume}</p>
                            </div>

                            <p className="video-time">{this.state.currentTime} / {this.state.duration}</p>
                        </div>
                        <div className="fullscreen-button">
                            <button className="button" onClick={this.fullscreen}>
                                <img src={fullscreenIcon} className="btn-img" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
