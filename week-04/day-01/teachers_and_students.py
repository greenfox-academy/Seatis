class Student(object):

    def learn(self):
        pass
    
    def question(self):
        Teacher.answer(self)

class Teacher(object):

    def teach(self):
        Student.learn(self)

    def answer(self):
        pass

# class A:
#     def m(self, x, y):
#         print(x+y)

# class B:
#     def call_a(self):
#         A.m(self, 1, 2)

# b = B()
# b.call_a()