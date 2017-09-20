from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

def square_master(x, y):
    lime_box = canvas.create_rectangle(x, y, x+50, y+50, fill='orange')

square_master(80,80)
square_master(120,10)
square_master(220,220)
square_master(20,250)

root.mainloop()