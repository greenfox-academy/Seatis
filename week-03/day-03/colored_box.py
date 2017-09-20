from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.
lime_box = canvas.create_rectangle(50, 50, 140, 100, fill='lime green')
a = canvas.create_line(50, 50, 140, 50, fill='red')
b = canvas.create_line(50, 50, 50, 100, fill='yellow')
c = canvas.create_line(50, 100, 140, 100, fill='blue')

root.mainloop()