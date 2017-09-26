class Person(object):
    
    def __init__(self, name = "Jane Doe", age = 30, gender = "female"):
        self.name = name
        self.age = age
        self.gender = gender
    
    def introduce(self):
        print("Hi, I'm " + self.name + ", a " + str(self.age) + " year old " + self.gender + ".")
    
    def get_goal(self):
        print("My goal is: Live for the moment!")

class Student(object):

    skipped_days = 0

    def __init__(self, name = "Jane Doe", age = 30, gender = "female", previous_organization = "The School of Life"):
        self.name = name
        self.age = age
        self.gender = gender
        self.previous_organization = previous_organization
    
    def introduce(self):
        print("Hi, I'm " + self.name + ", a " + str(self.age) + " year old " + self.gender + " from " + self.previous_organization + " who skipped " + str(self.skipped_days) + " from the course already.")
    
    def get_goal(self):
        print("Be a junior software developer.")
    
    def skip_days(self, number_of_days):
        self.skipped_days += number_of_days

class Mentor(object):
    
    def __init__(self, name = "Jane Doe", age = 30, gender = "female", level = "intermediate"):
        self.name = name
        self.age = age
        self.gender = gender
        self.level = level
    
    def get_goal(self):
        print("Educate brilliant junior software developers.")
    
    def introduce(self):
        print("Hi, I'm " + self.name + ", a " + str(self.age) + " year old " + self.gender + " " + self.level + " mentor.")

class Sponsor(object):

    hired_students = 0

    def __init__(self, name = "Jane Doe", age = 30, gender = "female", company = "Google"):
        self.name = name
        self.age = age
        self.gender = gender
        self.company = company
    
    def introduce(self):
        print("Hi, I'm " + self.name + ", a " + str(self.age) + " year old " + self.gender + " who represents " + self.company + " and hired " + str(self.hired_students) + " students so far.")

    def hire(self):
        self.hired_students += 1
    
    def get_goal(self):
        print("Hire brilliant junior software developers.")

class PallidaClass(object):
    
    def __init__(self, class_name):
        self.class_name = class_name
        self.students = []
        self.mentors = []

    def add_student(self, Student):
        self.students.append(Student)

    def add_mentor(self, Mentor):
        self.mentors.append(Mentor)


people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
jane = Person()
people.append(jane)
john = Student('John Doe', 20, 'male', 'BME')
people.append(john)
student = Student()
people.append(student)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
mentor = Mentor()
people.append(mentor)
sponsor = Sponsor()
people.append(sponsor)
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')
people.append(elon)
student.skip_days(3)

for i in range(5):
    elon.hire()

for i in range(3):
    sponsor.hire()

for member in people:
    member.introduce()
    member.get_goal()