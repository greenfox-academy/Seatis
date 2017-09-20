from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# fill the canvas with a checkerboard pattern.

def checkerboard_drawer(a):
    for j in range(int(300/a/2)):
        for i in range(int(300/a/2)):
            lime_box = canvas.create_rectangle(2*i*a, 2*j*a, (2*i+1)*a, (2*j+1)*a, fill="black")
            lime_box = canvas.create_rectangle((2*i+1)*a, (2*j+1)*a, (i+1)*2*a, (j+1)*2*a, fill="black")

checkerboard_drawer(50)

root.mainloop()