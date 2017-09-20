from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


def purple_steps(a):
    lime_box = canvas.create_rectangle(10+a, 10+a, 10+1.5*a, 10+1.5*a, fill="purple")
    if a < 140:
        return purple_steps(a*1.5)
        # return purple_steps(a+5)
purple_steps(20)

root.mainloop()