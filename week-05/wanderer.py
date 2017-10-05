from tkinter import *
import random

root = Tk()
canvas = Canvas(root, width = 700, height = 800, bg = 'white')
canvas.pack()

class Entity(object):

    def __init__(self, x = 35, y = 35):
        self.x = x
        self.y = y
        self.hero_down = PhotoImage(file = 'assets/hero-down.png')
        self.hero_up = PhotoImage(file = 'assets/hero-up.png')
        self.hero_right = PhotoImage(file = 'assets/hero-right.png')
        self.hero_left = PhotoImage(file = 'assets/hero-left.png')
        self.matrix = Map.get_map(self)
        self.skeleton_img = PhotoImage(file = 'assets/skeleton.png')
    
    def entity_draw(self, img_entity = PhotoImage(file = 'assets/hero-down.png')):
        self.image_entity = canvas.create_image(self.x, self.y, image = img_entity)
        # self.image_skeleton = canvas.create_image(35, 35, image = self.skeleton_img)

    def move(self, dx, dy):
        canvas.move(self.image_entity, dx, dy)
        # canvas.move(self.image_skeleton, 70, 0)
    
    def update_costume(self, costume):
        self.costume = costume
        canvas.itemconfigure(self.image_entity, image=self.costume)



class Map(object):

    def __init__(self):
        self.img_floor = PhotoImage(file = 'assets/floor.png')
        self.img_wall = PhotoImage(file = 'assets/wall.png')
        
    def get_map(self):
        try:  
            fr = open('assets/map_2.txt', "r")
            lines_list = fr.readlines()
            fr.close()
            matrix = []
            for line in lines_list:
                num_line = []
                for i in range(len(line)):
                    if line[i] == "0":
                        num_line.append(0)
                    elif line[i] == "1":
                        num_line.append(1)
                matrix.append(num_line)
            return matrix
        except IOError:
            print("Unable to read file: map_2.txt")
    
    
    def map_draw(self):
        self.matrix = self.get_map()
        h_len = len(self.matrix[0])
        v_len = len(self.matrix)
        h_dist = 840 / h_len
        v_dist = 910 / v_len
        for i in range(1, v_len-1):
            for j in range(1, h_len-1):
                if self.matrix[i][j] == 0:
                    image_floor = canvas.create_image(35 + (j-1) * h_dist, 35 + (i-1) * v_dist, image = self.img_floor)
                else:
                    image_wall = canvas.create_image(35 + (j-1) * h_dist, 35 + (i-1) * v_dist, image = self.img_wall)
        
    def game_stats(self):

        self.status_text = canvas.create_text(20, 785, text="hello")



class Game(object):
    
    def __init__(self):
        self.map_area = Map()
        self.hero = Entity()
        self.skeleton_1 = Entity(105, 105)
        self.skeleton_2 = Entity(455, 385)
        self.skeleton_3 = Entity(175, 455)
        self.boss = Entity(455, 245)
        self.map_area.map_draw()
        self.map_area.game_stats()
        self.hero.entity_draw()
        self.skeleton_img = PhotoImage(file = 'assets/skeleton.png')
        self.boss_img = PhotoImage(file = 'assets/boss.png')
        self.skeleton_1.entity_draw(self.skeleton_img)
        self.skeleton_2.entity_draw(self.skeleton_img)
        self.skeleton_3.entity_draw(self.skeleton_img)
        self.boss.entity_draw(self.boss_img)
        self.move_counter = 0
        # root.bind("<KeyPress>", self.hero.on_key_press)
        # self.skeleton_1.move(70, 0)
        # root.bind("<KeyPress>", self.skeleton_2.on_key_press)
        # root.mainloop()

    def random_move(self, skeleton, move_counter):
        self.skeleton = skeleton
        coords_skeleton = canvas.coords(self.skeleton.image_entity)
        x_s1 = int((coords_skeleton[0]-35)/70) + 1
        y_s1 = int((coords_skeleton[1]-35)/70) + 1
        moves = [[0, -70], [70, 0], [0, 70], [-70, 0]]      # up, right, down, left
        borders = [self.hero.matrix[y_s1-1][x_s1], self.hero.matrix[y_s1][x_s1+1], self.hero.matrix[y_s1+1][x_s1], self.hero.matrix[y_s1][x_s1-1]]

        possible_moves = []
        for i in range(len(borders)):
            if borders[i] == 0:
                possible_moves.append(moves[i])
        random_move = random.choice(possible_moves)
        if move_counter % 2 ==0:
            self.skeleton.move(random_move[0], random_move[1])
        
    
    def on_key_press(self, e):
        coords_hero = canvas.coords(self.hero.image_entity)
        
        # print(coords_skeleton_1)
        x = int((coords_hero[0]-35)/70) + 1
        y = int((coords_hero[1]-35)/70) + 1

        self.move_counter += 1
        self.random_move(self.skeleton_1, self.move_counter)
        self.random_move(self.skeleton_2, self.move_counter)
        self.random_move(self.skeleton_3, self.move_counter)
        self.random_move(self.boss, self.move_counter)

        if ( e.keysym == 'Up' ):
            if self.hero.matrix[y-1][x] != 1:
                self.hero.move(0,-70)
                self.hero.update_costume(self.hero.hero_up)
        elif( e.keysym == 'Down' ):
            if self.hero.matrix[y+1][x] != 1:
                self.hero.move(0,70)
                self.hero.update_costume(self.hero.hero_down)
        elif( e.keysym == 'Right' ):
            if self.hero.matrix[y][x+1] != 1:
                self.hero.move(70,0)
                self.hero.update_costume(self.hero.hero_right)
        elif( e.keysym == 'Left' ):
            if self.hero.matrix[y][x-1] != 1:
                self.hero.move(-70,0)
                self.hero.update_costume(self.hero.hero_left)
    
    def step(self):
        root.bind("<KeyPress>", self.on_key_press)
        root.mainloop()
    
    # def step_new(self):
    #     while True:
    #         key = ord(getch())
    #         if key == 27: #ESC
    #             break
    #         elif key == 80:
    #             self.hero.on_key_press('Up')
    #     root.mainloop()
                



game = Game()
game.step()
