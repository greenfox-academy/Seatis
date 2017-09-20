from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.

lime_box = canvas.create_rectangle(100, 100, 155, 155, fill='green')
lime_box = canvas.create_rectangle(0, 0, 100, 80, fill='red')
lime_box = canvas.create_rectangle(20, 270, 220, 175, fill='yellow')
lime_box = canvas.create_rectangle(240, 35, 280, 135, fill='navy')

root.mainloop()