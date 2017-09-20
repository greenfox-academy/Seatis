from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def move_to_center(x, y):
    line = canvas.create_line(x, y, 150, 150, fill='red')

i = 0
while i < 300:
    move_to_center(i, 0)
    move_to_center(300-i, 300)
    move_to_center(0, i)
    move_to_center(300, 300-i)
    i += 20

root.mainloop()