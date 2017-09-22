from tkinter import *
import math

m = math.sqrt(3) / 2
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def square_grid(x, y, a, w):
    lime_box = canvas.create_rectangle(x+a/4, y+a/4, x+3/4*a, y+3/4*a, fill='', outline='black', width=w)
    
    if a < 25:
        return
    else:
        square_grid(x, y, a/2, w-2)
        square_grid(x+a/2, y, a/2, w-2)
        square_grid(x, y+a/2, a/2, w-2)
        square_grid(x+a/2, y+a/2, a/2, w-2)

square_grid(0, 0, 600, 10)

root.mainloop()