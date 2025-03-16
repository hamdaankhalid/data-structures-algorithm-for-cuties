public class Solution {
   public string ReverseUsingArrayReverse(string text)
    {
        char[] charArray = text.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }

    public string AddStrings(string num1, string num2) {
        int tensPlaceValue = 0;
        // for my sanity imagine the longer string on top and the shorter on bottom
        string longer = num1.Length > num2.Length ? num1 : num2;
        string shorter = longer == num1 ? num2 : num1;

        longer = ReverseUsingArrayReverse(longer);
        shorter = ReverseUsingArrayReverse(shorter);

        // use like stack, but better
        StringBuilder strB = new StringBuilder();
        int idx = 0;
        for (int i = 0; i < longer.Length; i++)
        {
            char digitForShorter = i < shorter.Length ? shorter[i] : '0';
            char digitForLonger = longer[i];

            // works because of ascii values and using 0 as an offset we know '5' is 5 away from '0' and so forth
            int convDigLonger = (int)(digitForLonger - '0');
            int convDigShorter = (int)(digitForShorter - '0');

            int resAdd = convDigShorter + convDigLonger + tensPlaceValue;

            // Console.WriteLine(digitForLonger +" + " + digitForShorter + " + tensplace" + tensPlaceValue  + " = " + resAdd);

            // now if result is single digit, add it to the stack as char and move ahead
            if (resAdd < 10)
            {
                strB.Insert(0, (char)(resAdd + '0'));
                tensPlaceValue = 0;
            }
            else
            {
                int digitAtTensPlace = (resAdd - (resAdd % 10)) / 10;
                int digitAtOnesPlace = resAdd % 10;
                strB.Insert(0, (char)(digitAtOnesPlace + '0'));
                tensPlaceValue = digitAtTensPlace;
            }
        }

        if (tensPlaceValue != 0)
            strB.Insert(0, (char)(tensPlaceValue + '0'));

        return strB.ToString();
    }
}