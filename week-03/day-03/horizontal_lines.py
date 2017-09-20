from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

def horizontal_lines(x, y):
    line_to_center = canvas.create_line(x, y, x+50, y, fill='green')

horizontal_lines(100, 80)
horizontal_lines(0, 150)
horizontal_lines(20, 220)

root.mainloop()