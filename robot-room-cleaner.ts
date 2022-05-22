/**
 * class Robot {
 *      // Returns true if the cell in front is open and robot moves into the cell.
 *      // Returns false if the cell in front is blocked and robot stays in the current cell.
 * 		move(): boolean {}
 * 		
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnRight() {}
 * 		
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnLeft() {}
 * 		
 * 		// Clean the current cell.
 * 		clean(): {}
 * }
 */

function cleanRoom(robot: Robot) {
  cleanRoomInner(robot, 0, 0, 0, new Set<string>());
}

// DFS while marking visited
function cleanRoomInner(robot: Robot, row: number, col: number, facing: number, cleaned: Set<string>) {
  robot.clean();
  
  cleaned.add(`${row}_${col}`);
  
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  for (let i = 0; i < 4; i++) {
      
      const direction = directions[(facing + i) % 4];
      const nextRow = row+direction[0];
      const nextCol = col+direction[1];
      
      if(!cleaned.has(`${nextRow}_${nextCol}`) && robot.move()) {
          
          cleanRoomInner(robot, nextRow, nextCol, (facing + i) % 4, cleaned);
          
          back(robot);
          
      }
      robot.turnRight();
  }
};

function back(robot: Robot) {
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}
