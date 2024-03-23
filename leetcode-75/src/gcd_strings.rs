#[warn(dead_code)]
pub fn gcd_of_strings(str1: String, str2: String) -> String {
  // longest prefix of each string that matches
  let is_1_shorter = str1.len() < str2.len();
  let longer = if is_1_shorter { &str2 } else { &str1 };
  let shorter = if is_1_shorter { &str1 } else { &str2 };

  for i in (0..shorter.len()).rev() {
    let prefix: &str = &shorter[0..i+1]; 
    
    if does_compose(prefix, shorter) && does_compose(prefix, longer) {
        return prefix.to_string();
    }
  }

  "".to_string()
}

fn does_compose(base: &str, target: &str) -> bool {
    let step_len = base.len();

    if target.len() % step_len != 0 {
        return  false;
    }

    for j in (0..target.len()).step_by(step_len) {
        let subsection: &str = &target[j..j+step_len];

        if subsection != base {
            return false;
        }
    }
    return true;
}
