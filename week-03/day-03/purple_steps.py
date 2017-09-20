from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

# def purple_steps(a, color):
#     for i in range(20):
#         lime_box = canvas.create_rectangle(10+a*i, 10+a*i, 10+a*i+a, 10+a*i+a, fill=color)


# purple_steps(10, "purple")

def purple_steps(i):
    lime_box = canvas.create_rectangle(10*i, 10*i, 10*(1+i), 10*(1+i), fill="purple")
    if i < 20:
        return purple_steps(i+1)
  
purple_steps(1)


root.mainloop()