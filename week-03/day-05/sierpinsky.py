from tkinter import *
import math

m = math.sqrt(3) / 2
print (m)
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def sierpinsky(x, y, a):
    # lime_box = canvas.create_rectangle(x, y, x+a, y+a, fill='yellow')
    # line = canvas.create_line(0, 0, 150, 0.866 * 300, fill='black')
    
    lime_box = canvas.create_rectangle(x+a/3, y+a/3, x+2/3*a, y+2/3*a, fill='green')
    # lime_box = canvas.create_rectangle(x, y, x+a/3, y+a/3, fill='green')
    if a < 25:
        return
    else:
        sierpinsky(x, y, a/3)
        sierpinsky(x+2*a/3, y, a/3)
        sierpinsky(x+a/3, y, a/3)
        sierpinsky(x, y+2*a/3, a/3)
        sierpinsky(x, y+a/3, a/3)
        sierpinsky(x+2*a/3, y+a/3, a/3)
        sierpinsky(x+a/3, y+2*a/3, a/3)
        sierpinsky(x+2*a/3, y+2*a/3, a/3)

sierpinsky(0, 0, 600)

root.mainloop()