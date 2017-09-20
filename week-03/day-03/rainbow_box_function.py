from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

def square_center(a, color):
    lime_box = canvas.create_rectangle(150-a/2, 150-a/2, 150+a/2, 150+a/2, fill=color)

colors = ["red", "yellow", "blue", "green", "navy", "black", "brown", "purple", "pink", "orange"]
for i in range(10):
    square_center(300 - i*25, colors[i])



root.mainloop()