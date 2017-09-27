import unittest
import extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_2_and_3_is_5(self):
        self.assertEqual(extend.add(2, 3), 5)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(extend.add(4, 1), 5)
    
    def test_add_5_and_7_is_12_fail(self):
        self.assertEqual(extend.add(5, 7), 12)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(5, 4, 3), 5)

    def test_max_of_three_first_fail(self):
        self.assertEqual(extend.max_of_three(5, 4, 7), 7)

    def test_max_of_three_third(self):
        self.assertEqual(extend.max_of_three(3, 4, 5), 5)

    def test_median_four(self):
        self.assertEqual(extend.median([7,5,3,5]), 5)

    def test_median_five(self):
        self.assertEqual(extend.median([1,2,3,4,5]), 3)
    
    def test_median_five_fail(self):
        self.assertEqual(extend.median([1,3,4,12]), 3.5)

    def test_is_vovel_a(self):
        self.assertTrue(extend.is_vovel('a'))

    def test_is_vovel_u(self):
        self.assertTrue(extend.is_vovel('u'))

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kolbice'), 'kovolbiviceve')
    
    def test_translate_attila_fail(self):
        self.assertEqual(extend.translate('attila'), 'avattivilava')
    
    def test_translate_attila_fail_2(self):
        self.assertEqual(extend.translate('koala'), 'kovoavalava')

if __name__ == '__main__':
    unittest.main()