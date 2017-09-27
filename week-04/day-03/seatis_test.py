import unittest
from seatis_work import TestMyMethods
from seatis_work import Sharpie

my_method = TestMyMethods()
sharpie = Sharpie()

class TestAppleString(unittest.TestCase):

    def test_apple_default(self):
        self.assertEqual("apple", my_method.get_apple())
    
    def test_apple_string(self):
        self.assertEqual("pear", my_method.get_apple("pear"))


if __name__ == '__main__':
    unittest.main(exit=False)

class TestSumNumbers(unittest.TestCase):

    def test_sum_numbers(self):
        self.assertEqual(6, my_method.sum_items([1, 2, 3]))
    
    def test_sum_numbers_2(self):
        self.assertEqual(6, my_method.sum_items([1, 2, 3]))


if __name__ == '__main__':
    unittest.main(exit=False)

class TestAnagram(unittest.TestCase):

    def test_anagram(self):
        self.assertTrue(my_method.anagram("rail safety", "fairy tales"))

if __name__ == '__main__':
    unittest.main(exit=False)

class TestCountLetters(unittest.TestCase):   

    def test_count_letters(self):
        self.assertEqual(my_method.count_letters("attila"), {"a": 2, "t": 2, "i": 1, "l": 1})


if __name__ == '__main__':
    unittest.main(exit=False)

class TestFibonacci(unittest.TestCase):

    def test_fibonacci(self):
        self.assertEqual(my_method.fibonacci(6), 8)
    
    def test_fibonacci_type_error_string(self):
        self.assertRaises(TypeError, my_method.fibonacci("Hello"))
    
    def test_fibonacci_type_error_boolean(self):
        self.assertRaises(TypeError, my_method.fibonacci(True))
    
    def test_fibonacci_type_error_int(self):
        self.assertRaises(TypeError, my_method.fibonacci(8))

class TestSharpie(unittest.TestCase):
    def test_ink_amount_100(self):
        self.assertEqual(sharpie.ink_amount, 100)
    
    def test_missing_arguments(self):
        self.assertTrue(Sharpie())
    
    def test_ink_amount_color_equal(self):
        self.assertEqual(Sharpie("red").color, "red")
    
    def test_ink_amount_width_equal(self):
        self.assertEqual(Sharpie("", 12.6).width, 12.6)

    # def test_width_type_float


if __name__ == '__main__':
    unittest.main(exit=False)