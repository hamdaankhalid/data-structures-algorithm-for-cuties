def is_valid(bin_str, one_group, zero_group):
  # every 1 that occurs should occur in groups of one_group size
  # every 0 that occurs should occur in hroups of zero_group size
  idx = 0
  while idx < len(bin_str) - 1:
    if (bin_str[idx] == '0'):
      jump_flag = False
      zero_count = 0
      while (idx < len(bin_str)-1 and bin_str[idx] == '0' and not jump_flag):
        idx+=1
        zero_count+=1
        if zero_count >= zero_group:
          jump_flag = True
      if zero_count < zero_group:
        return False
    else:
      jump_flag = False
      one_count = 0
      while (idx < len(bin_str)-1 and bin_str[idx] == '1' and not jump_flag):
        idx+=1
        one_count+=1
        if one_count >= one_group:
          jump_flag = True
      if one_count < one_group:
        return False
  return True

def countGoodString(min_len, max_len, one_group, zero_group):
  res = []
  max_bin = "1"*max_len
  min_bin = "0"*min_len
  max_num = int(max_bin, 2)
  min_num = int(min_bin, 2)
  for i in range(min_num, max_num):
    i_as_bin = bin(i)
    if (is_valid(i_as_bin[2:], one_group, zero_group)):
      res.append(i_as_bin[2:])
    
  return res



print(countGoodString(1, 3, 2, 1))