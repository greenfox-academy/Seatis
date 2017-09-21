from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def magic(x, y, a):
    lime_box = canvas.create_rectangle(x, y, x+a, y+a, fill='yellow')
    line = canvas.create_line(x, y+a/3, x+a, y+a/3, fill='black')
    line = canvas.create_line(x, y+2*a/3, x+a, y+2*a/3, fill='black')
    line = canvas.create_line(x+a/3, y, x+a/3, y+a, fill='black')
    line = canvas.create_line(x+2*a/3, y, x+2*a/3, y+a, fill='black')
    if a < 13:
        return
    else:
        return magic(x, y+a/3, a/3), magic(x+a/3, y, a/3), magic(x+a/3, y+2*a/3, a/3), magic(x+2*a/3, y+a/3, a/3)

magic(0, 0, 600)

# magic(0, 100, 100)
# magic(100, 0, 100)
# magic(100, 200, 100)
# magic(200, 100, 100)

root.mainloop()