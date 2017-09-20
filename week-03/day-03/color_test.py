from tkinter import *
import random

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

r = lambda: random.randint(0,255)
random_color = '#%02X%02X%02X' % (r(),r(),r())

# draw a box that has different colored lines on each edge.
lime_box = canvas.create_rectangle(50, 50, 140, 100, fill=color)


root.mainloop()