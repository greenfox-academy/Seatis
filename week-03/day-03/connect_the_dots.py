from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a function that takes 1 parameter:
# a list of [x, y] points
# and connects them with green lines.
# connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
# connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
# [120, 100], [85, 130], [50, 100]]
my_dots_1 = [[10, 10], [290,  10], [290, 290], [10, 290]]
my_dots_2 = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]
def connect_dots(dots):
    for i in range(len(dots)-1):
        line = canvas.create_line(dots[i][0], dots[i][1], dots[i+1][0], dots[i+1][1], fill='red')
    i = 0
    line = canvas.create_line(dots[i][0], dots[i][1], dots[len(dots)-1][0], dots[len(dots)-1][1], fill='red')
    
connect_dots(my_dots_2)    
   

root.mainloop()