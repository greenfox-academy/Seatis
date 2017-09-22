from tkinter import *
import math

m = math.sqrt(3) / 2
print (m)
root = Tk()



canvas = Canvas(root, width='600', height='600')
canvas.pack()

def hexagon(x, y, d):
    a = d/ 2
    poly = canvas.create_polygon(x, y, x+d/4, y-m*d/2, x+3*d/4, y-m*d/2, x+d, y, x+3*d/4, y+m*d/2, x+d/4, y+m*d/2, fill='', outline='black')
    
    if d < 10:
        return
    else:
        hexagon(x, y, d/3)
        hexagon(x+a/3, y-2*a*m/3, d/3)
        hexagon(x+a, y-2*a*m/3, d/3)
        hexagon(x+2*a-2*a/3, y, d/3)
        hexagon(x+a, y+2*a*m/3, d/3)
        hexagon(x+a/3, y+2*a*m/3, d/3)

hexagon(0, 300, 600)

root.mainloop()