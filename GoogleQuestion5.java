import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class GoogleQuestion5 {
  public static void main(String[] args) {
    int result = AnsSolution.solution(0, 63);
    System.out.println("Result: " + result);
  }
}

class QueueElement {
  int val;
  int moves;
  
  QueueElement(int val, int moves) {
    this.val = val;
    this.moves = moves;
  }

  @Override
  public String toString() {
    return String.valueOf(val);
  }
}

class AnsSolution {
  public static int solution(int src, int dest) {
    int minMoves = Integer.MAX_VALUE;
    boolean[] trackVisited = new boolean[64];
  
    Queue<QueueElement> q = new LinkedList<>();
    q.add(new QueueElement(src, 0));
    trackVisited[src] = true;

    while (!q.isEmpty()) {
      // System.out.println("SIZE " + q.size());

      QueueElement curr = q.poll();
      
      // System.out.println("polled -> " + curr);

      if (curr.val == dest) {
        minMoves = Math.min(minMoves, curr.moves);
      } else {
        List<Integer> moves = getAllMovesFromPoint(curr.val);
        
        // System.out.println("MOVES FOR " + moves + " " + curr.val);

        for(int move : moves) {
          if (!trackVisited[move]) {
            trackVisited[move] = true;
            q.add(new QueueElement(move, curr.moves+1));
          }
        }
      }
    }
    return minMoves;
  }

  private static List<Integer> getAllMovesFromPoint(int beg) {
    // 2 up, 1 right
    int move1 = beg - 16 + 1;
    // 2 up, 1 left
    int move5 = beg - 16 - 1;
    
    // 2 down, 1 left
    int move3 = beg + 16 - 1;
    // 2 down, 1 right
    int move7 = beg + 16 + 1;

    // 2 right, 1 down
    int move2 = beg + 2 + 8;
    // 2 right, 1 up
    int move8 = beg + 2 - 8;

    // 2 left, 1 up
    int move4 = beg - 2 - 8;
    // 2 left, 1 down
    int move6 = beg - 2 + 8;  

    Map<Integer, Integer> res = new HashMap<Integer, Integer>();
    res.put(1, move1);
    res.put(2, move2);
    res.put(3, move3);
    res.put(4, move4);
    res.put(5, move5);
    res.put(6, move6);
    res.put(7, move7);
    res.put(8, move8);

    int rowOfBeg = (int) Math.floor(beg / 8);
    int colOfBeg = beg % 8;

    Set<Integer> filteredMoves = new HashSet<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));

    if (rowOfBeg < 2) {
      // no moves that do 2 ups: move1, move5
      filteredMoves.remove(1);
      filteredMoves.remove(5);
    }

    if (rowOfBeg > 5) {
      // lower 2nd to last rows,
      // no moves that do 2 downs: move3, move7
      filteredMoves.remove(3);
      filteredMoves.remove(7);
    }

    if (colOfBeg < 2) {
      // left 2nd col
      // no moves that do 2 lefts: move4, move6
      filteredMoves.remove(4);
      filteredMoves.remove(6);
    }

    if (colOfBeg > 5) {
      // right 2nd to last col
      // no moves that do 2 rights: move2, move8
      filteredMoves.remove(2);
      filteredMoves.remove(8);
    }

    if (rowOfBeg == 0) {
      // upper most level
      // no moves that do 2 right or 2 left and up: move4, move8
      filteredMoves.remove(4);
      filteredMoves.remove(8);
    }

    if (rowOfBeg == 7) {
      // lowestlevel
      // no moves that go 2 right or 2 left and down: move2, move6
      filteredMoves.remove(2);
      filteredMoves.remove(6);
    }

    if (colOfBeg == 0) {
      // first col
      // no moves that go 2 up or 2 down and left: move3, move5
      filteredMoves.remove(3);
      filteredMoves.remove(5);
    }

    if (colOfBeg == 7) {
      // last col
      // no moves that go 2 up or 2 down and right: move1 move7
      filteredMoves.remove(1);
      filteredMoves.remove(7);
    }

    List<Integer> result = new ArrayList<Integer>();
    for (int filteredMove : filteredMoves) {
      result.add(res.get(filteredMove));
    }

    return result;
  }
}
