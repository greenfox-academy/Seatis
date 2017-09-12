students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

# create a function that takes a list of students and prints: 
# - how many candies are owned by students

# create a function that takes a list of students and prints:
# - Sum of the age of people who have lass than 5 candies

# print (students[0]['name'] + "'s candies: " + str(students[0]['candies']))

def candies():
    name_list = []
    for lines in students:
        name_list.append(lines['name'])     #create a list of the names
        print(lines['name'] + "'s candies: " + str(lines['candies']))

def ages():
    sum_age = 0
    for lines in students:
        if lines['candies'] < 5:
            sum_age += lines['age']
    print(sum_age)

candies()
ages()

