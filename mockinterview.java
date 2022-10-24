import java.util.*;

public class Hackerranking {
    public static void main(String[] args) {
        System.out.println(Result.prison(
                6,
                6,
                new ArrayList<>(Arrays. asList(4)),
                new ArrayList<>(Arrays. asList(2))
        ));
        System.out.println(Result.prison(
                3,
                3,
                new ArrayList<>(Arrays. asList(2)),
                new ArrayList<>(Arrays. asList(2))
        ));
        System.out.println(Result.prison(
                2,
                2,
                new ArrayList<>(Arrays. asList(1)),
                new ArrayList<>(Arrays. asList(2))
        ));

        System.out.println(Result.countMax(new ArrayList<>(Arrays.asList("2 3", "3 7", "4 1"))));

        System.out.println(Result.cardPackets(new ArrayList<>(Arrays.asList(3, 8, 7, 6, 4))));
    }
}

class Result {
    /**
     * Initially we have a matrix of n rows and m cols
     * we remove the row listed in h & remove the cols
     * listed in v. Now find the largest cell's area
     */
    public static long prison(int n, int m, List<Integer> h, List<Integer> v) {
        List<Integer> rows = new ArrayList<>();
        for (int i = 0; i <= n+1; i++) {rows.add(i);}
        List<Integer> cols = new ArrayList<>();
        for (int i = 0; i <= m+1; i++) {cols.add(i);}

        // filter out the removed stuff
        rows.removeAll(new HashSet<>(h));
        cols.removeAll(new HashSet<>(v));

        long largestRowDiff = (long) Double.NEGATIVE_INFINITY;
        for (int i = 1; i < rows.size(); i++) {
            Long rowDiff = (long) (rows.get(i) - rows.get(i - 1));
            if (largestRowDiff <= rowDiff) {
                largestRowDiff = rowDiff;
            }
        }

        long largestColDiff = (long) Double.NEGATIVE_INFINITY;
        for (int i = 1; i < cols.size(); i++) {
            Long colDiff = (long) (cols.get(i) - cols.get(i - 1));
            if (largestColDiff <= colDiff) {
                largestColDiff = colDiff;
            }
        }

        return largestRowDiff*largestColDiff;
    }

    /**
     * each string in upRight is of the format "r c"
     * r is the ending row and starting row is 0
     * c is the ending col and starting col is 0
     * everything in that gets a +1
     * we need to find the max value in the grid
     * This can be found by max overlap of a cell
     * string => 1 4, 2 3, 4 1
     * first string increments 1,0; 1,1; 1,2; 1,3; 1,4
     * second string increments 1,0;
     */
    public static long countMax(List<String> upRight) {
        Long minCol = Long.MAX_VALUE;
        Long minRow = Long.MAX_VALUE;

        for (String instruction : upRight) {
            String[] splitInst = instruction.split(" ");
            Long rowEnd = Long.parseLong(splitInst[0]);
            Long colEnd = Long.parseLong(splitInst[1]);
            minCol = Math.min(colEnd, minCol);
            minRow = Math.min(rowEnd, minRow);
        }
        return minCol * minRow;
    }


    public static int cardPackets(List<Integer> cardTypes) {
        Set<Integer> seenBefore = new HashSet<>();
        int cardSizeNoDuplicates = 0;

        for (int i: cardTypes) {
            if (seenBefore.contains(i)) {
                continue;
            }
            cardSizeNoDuplicates++;
            seenBefore.add(i);
        }

        Set<Integer> seen = new HashSet<>();
        int currCardsTotal = 0;
        for (int i: cardTypes) {
            if (seen.contains(i)) {
                continue;
            }
            currCardsTotal+=i;
            seen.add(i);
        }

        // what is the cloest multiple of CardSize to currCardsTotal
        return cardSizeNoDuplicates - (currCardsTotal%cardSizeNoDuplicates);
    }
}
