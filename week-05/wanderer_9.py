from tkinter import *
import random

root = Tk()
canvas = Canvas(root, width = 1120, height = 700, bg = 'white') # height = 630
canvas.pack()


class View(object):
    pass



class Entity(object):

    def __init__(self, x = 35, y = 35):
        self.x = x
        self.y = y
    
    def entity_draw(self, img_entity = PhotoImage(file = 'assets/hero-down.png')):
        self.image_entity = canvas.create_image(self.x, self.y, image = img_entity)

    def move(self, dx, dy):
        canvas.move(self.image_entity, dx, dy)

    def update_costume(self, costume):
        self.costume = costume
        canvas.itemconfigure(self.image_entity, image=self.costume)

class Hero(Entity):
    
    def __init__(self, x = 35, y = 35):
        super().__init__(x, y)
        self.hero_down = PhotoImage(file = 'assets/hero-down.png')
        self.hero_up = PhotoImage(file = 'assets/hero-up.png')
        self.hero_right = PhotoImage(file = 'assets/hero-right.png')
        self.hero_left = PhotoImage(file = 'assets/hero-left.png')
        self.hp = 5000
        self.alive = True

class Boss(Entity):
    
    def __init__(self, x = 35, y = 35):
        super().__init__(x, y)
        self.boss_img = PhotoImage(file = 'assets/boss.png')
        self.hp = 2100

class Skeleton(Entity):
    
    def __init__(self, x = 35, y = 35):
        super().__init__(x, y)
        self.skeleton_img = PhotoImage(file = 'assets/skeleton.png')
        self.hp = 1000

class Map(object):

    def __init__(self):
        self.img_floor = PhotoImage(file = 'assets/floor.png')
        self.img_wall = PhotoImage(file = 'assets/wall.png')
        
    def get_map(self):
        try:  
            fr = open('assets/map_3.txt', "r")
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
            print("Unable to read file: map_3.txt")
    
    
    def map_draw(self):
        self.matrix = self.get_map()
        h_len = len(self.matrix[0])
        v_len = len(self.matrix)
        h_dist = 1260 / h_len
        v_dist = 770 / v_len
        for i in range(1, v_len-1):
            for j in range(1, h_len-1):
                if self.matrix[i][j] == 0:
                    image_floor = canvas.create_image(35 + (j-1) * h_dist, 35 + (i-1) * v_dist, image = self.img_floor)
                else:
                    image_wall = canvas.create_image(35 + (j-1) * h_dist, 35 + (i-1) * v_dist, image = self.img_wall)




class Game(object):
    
    def __init__(self):
        self.map_area = Map()
        self.matrix = self.map_area.get_map()
        self.hero = Hero()
        self.skeleton_1 = Skeleton(105, 105)
        self.skeleton_2 = Skeleton(455, 385)
        self.skeleton_3 = Skeleton(175, 455)
        self.boss = Boss(455, 245)
        self.enemies = [self.skeleton_1, self.skeleton_2, self.skeleton_3, self.boss]
        self.map_area.map_draw()
        self.game_stats(self.hero.hp, self.skeleton_1.hp)
        self.hero.entity_draw()
        self.skeleton_1.entity_draw(self.skeleton_1.skeleton_img)
        self.skeleton_2.entity_draw(self.skeleton_2.skeleton_img)
        self.skeleton_3.entity_draw(self.skeleton_3.skeleton_img)
        self.boss.entity_draw(self.boss.boss_img)
        self.move_counter = 0
        self.fight_state = False
        self.ccc = 7

    def get_cell(self, enemy):
        coords_enemy = canvas.coords(enemy.image_entity)
        x = int((coords_enemy[0]-35)/70) + 1
        y = int((coords_enemy[1]-35)/70) + 1
        # print([x, y])
        return [x, y]
    
    
    def random_move(self, enemy, move_counter):
        self.enemy = enemy
        coords_enemy = canvas.coords(self.enemy.image_entity)
        temporary_matrix = self.map_area.get_map()
        x_s1 = int((coords_enemy[0]-35)/70) + 1
        y_s1 = int((coords_enemy[1]-35)/70) + 1
        moves = [[0, -70], [70, 0], [0, 70], [-70, 0]]      # up, right, down, left
        for enemy in self.enemies:
            temporary_matrix[self.get_cell(enemy)[1]][self.get_cell(enemy)[0]] = 1
        borders = [temporary_matrix[y_s1-1][x_s1], temporary_matrix[y_s1][x_s1+1], temporary_matrix[y_s1+1][x_s1], temporary_matrix[y_s1][x_s1-1]]

        possible_moves = []
        for i in range(len(borders)):
            if borders[i] == 0:
                possible_moves.append(moves[i])
        if possible_moves != []:
            random_move = random.choice(possible_moves)
            if move_counter % 2 == 0:
                self.enemy.move(random_move[0], random_move[1])
        
    
    def on_key_press(self, e):
        
        coords_hero = canvas.coords(self.hero.image_entity)
        
        x = int((coords_hero[0]-35)/70) + 1
        y = int((coords_hero[1]-35)/70) + 1
        self.move_counter += 1

        if self.fight_state == False and self.skeleton_1.hp > 0:
            self.random_move(self.skeleton_1, self.move_counter)
        
        if self.fight_state == False and self.skeleton_2.hp > 0:
            self.random_move(self.skeleton_2, self.move_counter)
        
        if self.fight_state == False and self.skeleton_3.hp > 0:
            self.random_move(self.skeleton_3, self.move_counter)

        if self.fight_state == False and self.boss.hp > 0:
            self.random_move(self.boss, self.move_counter)

        if self.fight_state == False and self.hero.alive:
            if ( e.keysym == 'Up' ):
                self.hero.update_costume(self.hero.hero_up)
                if self.matrix[y-1][x] != 1:
                    self.hero.move(0,-70)
            elif( e.keysym == 'Down' ):
                self.hero.update_costume(self.hero.hero_down)
                if self.matrix[y+1][x] != 1:
                    self.hero.move(0,70)
            elif( e.keysym == 'Right' ):
                self.hero.update_costume(self.hero.hero_right)
                if self.matrix[y][x+1] != 1:
                    self.hero.move(70,0)
            elif( e.keysym == 'Left' ):
                self.hero.update_costume(self.hero.hero_left)
                if self.matrix[y][x-1] != 1:
                    self.hero.move(-70,0)
            elif( e.keysym == 'Escape' ):
                root.destroy()
        elif self.fight_state and self.hero.alive:
            if ( e.keysym == 'space' ):
                self.fight(self.actual_enemy)
        elif self.hero.alive == False:
            if ( e.keysym == 'Escape' ):
                root.destroy()
        
        coords_hero = canvas.coords(self.hero.image_entity)
        coords_skeleton_1 = canvas.coords(self.skeleton_1.image_entity)
        coords_skeleton_2 = canvas.coords(self.skeleton_2.image_entity)
        coords_skeleton_3 = canvas.coords(self.skeleton_3.image_entity)
        coords_boss = canvas.coords(self.boss.image_entity)

        if coords_hero == coords_skeleton_1 and self.fight_state == False:
            self.fight_state = True
            self.fight(self.skeleton_1)
            self.actual_enemy = self.skeleton_1
        elif coords_hero == coords_skeleton_2 and self.fight_state == False:
            self.fight_state = True
            self.fight(self.skeleton_2)
            self.actual_enemy = self.skeleton_2
        elif coords_hero == coords_skeleton_3 and self.fight_state == False:
            self.fight_state = True
            self.fight(self.skeleton_3)
            self.actual_enemy = self.skeleton_3
        elif coords_hero == coords_boss and self.fight_state == False:
            self.fight_state = True
            self.fight(self.boss)
            self.actual_enemy = self.boss
    
    def fight(self, enemy):
        self.hero.hp -= 100
        enemy.hp -= 100
        canvas.delete(self.status_text)
        canvas.delete(self.status_text_2)
        self.game_stats(self.hero.hp, enemy.hp)
        if enemy.hp <= 0:
            self.fight_state = False
            canvas.delete(enemy.image_entity)
            canvas.delete(self.status_text_2)
            del self.enemies[self.enemies.index(enemy)]
        elif self.hero.hp <= 0:
            canvas.delete(self.status_text)
            canvas.delete(self.status_text_2)
            self.status_text_3 = canvas.create_text(160, 650, font=("Purisa", 16), text="GAME OVER -- Press ESC to quit!")
            self.hero.alive = False
        
    def game_stats(self, hero_hp, enemy_hp):
        self.status_text = canvas.create_text(40, 650, font=("Purisa", 16), text=hero_hp)
        self.status_text_2 = canvas.create_text(240, 650, font=("Purisa", 16), text=enemy_hp)
        # canvas.delete(self.status_text)
    def step(self):
        root.bind("<KeyPress>", self.on_key_press)
        root.mainloop()
    


game = Game()
game.step()
