from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

def go_to_center(x, y):
    line_to_center = canvas.create_line(x, y, 150, 150, fill='green')

go_to_center(100, 80)
go_to_center(0, 0)
go_to_center(300, 300)


root.mainloop()