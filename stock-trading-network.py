from typing import List

def allNetworksMatchThreshold(networks : List[List[int]], thresh : int) -> bool:
  if len(networks) == 0: return False
  for network in networks:
    if sum(network) < thresh:
      return False
  return True

def allNetworksMatchMinCount(networks : List[List[int]], minCount : int) -> int:
  if len(networks) == 0:
    return False
  for network in networks:
    if len(network) < minCount:
      return False
  return True

def countOfAllNonEmptyNetworks(networks : List[List[int]]) -> int:
  count = 0
  for network in networks:
    if len(network) > 0:
      count+=1
  return count

"""
For computer to be on the same network:
  1. Computers must be adjacent to one another
  2. There must be atleast minComps number of computers in one network.
  3. The total processing speed of the network must be at least a certain threshold,
  speedThreshold.
  4. A computer can only belong to at most one network.

  Return maximum number of networks that can be formed.
"""
def maximumNetwork(speed : List[int], minComps : int, speedThreshold : int, networks : List[List[int]] = []) -> int:
  if len(speed) == 0 and (allNetworksMatchThreshold(networks, speedThreshold) and allNetworksMatchMinCount(networks, minComps)):
    return len(networks)
  if len(speed) == 0:
    return -1

  maxNetwork = 0
  computer = speed[0]
  # scenario1 we take current computer and make it part of running network. This can only be done if previous one was added
  scenario1Network = networks[:]
  if len(scenario1Network) == 0:
    scenario1Network.append([])
  scenario1Network[-1].append(computer)
  scenario1 = maximumNetwork(speed[1:], minComps, speedThreshold, scenario1Network)
  maxNetwork = max(maxNetwork, scenario1)
    
  # scenario2 we skip the current computer and use it for next network
  scenario2Network = networks[:]
  scenario2Network.append([computer])
  scenario2 = maximumNetwork(speed[1:], minComps, speedThreshold, scenario2Network)
  maxNetwork = max(maxNetwork, scenario2)

  # skip this comp for any network
  scenario3Network = networks[:]
  scenario3 = maximumNetwork(speed[1:], minComps, speedThreshold, scenario3Network)
  maxNetwork = max(maxNetwork, scenario3)

  return maxNetwork


def main():
  print(maximumNetwork([5, 7, 9,12,10,13], 2, 15))
  
main()