from tkinter import *
import math

m = math.sqrt(3) / 2
print (m)
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def triangle(x, y, a):
    # lime_box = canvas.create_rectangle(x, y, x+a, y+a, fill='yellow')
    # line = canvas.create_line(0, 0, 150, 0.866 * 300, fill='black')
    
    line = canvas.create_line(x, y, x+a, y, fill='black')
    line = canvas.create_line(x+a, y, x+a/2, y+a, fill='black')
    line = canvas.create_line(x+a/2, y+a, x, y, fill='black')
    if a < 13:
        return
    else:
        triangle(x, y, a/2)
        triangle(x+a/2, y, a/2)
        triangle(x+a/4, y+a/2, a/2)
triangle(0, 0, 600)



root.mainloop()