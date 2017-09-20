from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

# def line_play(x, y, a, b):
#     line = canvas.create_line(x, y, a, b, fill='red')

# # i = 0
# # while i < 300:
# #     line_play(0, i)
# #     i += 20
    
# line_play(0, 300, 300, 300)

for i in range(200):
    line = canvas.create_line(i+1, 10, i+1+1, 10, fill='red')

root.mainloop()