from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

def square_center(a):
    lime_box = canvas.create_rectangle(150-a/2, 150-a/2, 150+a/2, 150+a/2, fill='orange')

square_center(30)
square_center(70)
square_center(110)
square_center(190)

root.mainloop()