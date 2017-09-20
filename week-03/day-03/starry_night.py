from tkinter import *
import random

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()



# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)



background = canvas.create_rectangle(0, 0, 300, 300, fill="black")
for i in range(50):
    r = lambda: random.randint(0,255)
    random_color = '#%02X%02X%02X' % (r(),r(),r())
    a = random.randint(0, 300)
    b = random.randint(0, 300)
    random_star = canvas.create_rectangle(a, b, a+3, b+3, fill=random_color)

root.mainloop()