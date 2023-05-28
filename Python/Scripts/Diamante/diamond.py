rows = int(input("Enter diamond rows: "))

for i in range(1, rows):
    for j in range(1, rows - i):
        print(" ", end="")
    for j in range(1, i * 2 - 1):
        print("*", end="")
    print()

for i in range(rows - 1, 0, -1):
    for j in range(1, rows - i):
        print(" ", end="")
    for j in range(1, i * 2 - 1):
        print("*", end="")
    print()
