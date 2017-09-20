from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

def line_play(x, y, a, b, color):
    line = canvas.create_line(x, y, a, b, fill=color)

i = 0
while i < 150:
    line_play(150, i, 150+i, 150, 'purple')
    line_play(300-i, 0, 300, 150-i, 'purple')
    line_play(0, i, i, 150, 'purple')
    line_play(150-i, 0, 150, 150-i, 'purple')
    line_play(0, 150+i, i, 300, 'purple')
    line_play(150-i, 150, 150, 300-i, 'purple')
    line_play(150, 150+i, 150+i, 300, 'purple')
    line_play(300-i, 150, 300, 300-i, 'purple')
    i += 10



# def quarter_maker(x, y, a):
#     horizontal_line = canvas.create_line(x-a/2, y, x+a/2, y, fill='red')
#     vertical_line = canvas.create_line(x, y-a/2, x, y+a/2, fill='green')

# quarter_maker(150, 150, 300)
# quarter_maker(75, 75, 150)
# quarter_maker(225, 75, 150)
# quarter_maker(75, 225, 150)
# quarter_maker(225, 225, 150)

root.mainloop()