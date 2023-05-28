import pygame
import sys

pygame.init()

# Constants
WINDOW_SIZE = (300, 300)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
LINE_WIDTH = 5
XO_SIZE = 80

# Initialize the game window
screen = pygame.display.set_mode(WINDOW_SIZE)
pygame.display.set_caption("Tic-tac-toe")

# Game loop control
running = True

# Game state
board = [['' for _ in range(3)] for _ in range(3)]
current_player = 'X'
winner = None


def draw_grid():
    for x in range(100, 300, 100):
        pygame.draw.line(screen, BLACK, (x, 0), (x, 300), LINE_WIDTH)

    for y in range(100, 300, 100):
        pygame.draw.line(screen, BLACK, (0, y), (300, y), LINE_WIDTH)


def draw_x(x, y):
    pygame.draw.line(screen, BLACK, (x - XO_SIZE // 2, y - XO_SIZE // 2), (x + XO_SIZE // 2, y + XO_SIZE // 2), LINE_WIDTH)
    pygame.draw.line(screen, BLACK, (x + XO_SIZE // 2, y - XO_SIZE // 2), (x - XO_SIZE // 2, y + XO_SIZE // 2), LINE_WIDTH)


def draw_o(x, y):
    pygame.draw.circle(screen, BLACK, (x, y), XO_SIZE // 2, LINE_WIDTH)


def check_winner():
    global winner

    # Check rows
    for row in board:
        if row[0] == row[1] == row[2] != '':
            winner = row[0]
            return

    # Check columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] != '':
            winner = board[0][col]
            return

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != '':
        winner = board[0][0]
        return
    if board[0][2] == board[1][1] == board[2][0] != '':
        winner = board[0][2]
        return


def draw_winning_line():
    if winner is None:
        return

    start_x, start_y, end_x, end_y = 0, 0, 0, 0

    # Check rows
    for i, row in enumerate(board):
        if row[0] == row[1] == row[2] != '':
            start_x, start_y = 50, i * 100 + 50
            end_x, end_y = 250, i * 100 + 50
            break

    # Check columns
    for i in range(3):
        if board[0][i] == board[1][i] == board[2][i] != '':
            start_x, start_y = i * 100 + 50, 50
            end_x, end_y = i * 100 + 50, 250
            break

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != '':
        start_x, start_y, end_x, end_y = 50, 50, 250, 250
    if board[0][2] == board[1][1] == board[2][0] != '':
        start_x, start_y, end_x, end_y = 250, 50, 50, 250

    pygame.draw.line(screen, BLACK, (start_x, start_y), (end_x, end_y), LINE_WIDTH * 2)


def handle_mouse_click(x, y):
    global current_player

    if winner is not None:
        return

    row, col = y // 100, x // 100

    if board[row][col] == '':
        board[row][col] = current_player
        check_winner()

        if current_player == 'X':
            current_player = 'O'
        else:
            current_player = 'X'


while running:
    screen.fill(WHITE)
    draw_grid()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN:
            x, y = pygame.mouse.get_pos()
            handle_mouse_click(x, y)

    for i in range(3):
        for j in range(3):
            if board[i][j] == 'X':
                draw_x(j * 100 + 50, i * 100 + 50)
            elif board[i][j] == 'O':
                draw_o(j * 100 + 50, i * 100 + 50)

    draw_winning_line()
    pygame.display.flip()

pygame.quit()
sys.exit()
