import wave
import struct

# Open the MP3 file in binary mode
with open('andnowyouknow.mp3', 'rb') as mp3_file:
    # Skip over the ID3 tag, if present
    if mp3_file.read(3) == b'ID3':
        size = struct.unpack('>I', mp3_file.read(4))[0]
        mp3_file.seek(size + 10)

    # Open the WAV file for writing
    with wave.open('temp.wav', 'wb') as wav_file:
        # Set the WAV file parameters
        wav_file.setnchannels(2)  # stereo
        wav_file.setsampwidth(2)  # 16-bit
        wav_file.setframerate(44100)  # CD-quality

        # Read and convert the MP3 file data
        mp3_data = mp3_file.read(8192)
        while mp3_data:
            # Convert MP3 data to WAV data
            wav_data = struct.pack('<' + str(len(mp3_data) * 2) + 'h', *struct.unpack('<' + str(len(mp3_data)) + 'B', mp3_data))

            # Write the WAV data to the output file
            wav_file.writeframes(wav_data)

            # Read the next block of MP3 data
            mp3_data = mp3_file.read(8192)
