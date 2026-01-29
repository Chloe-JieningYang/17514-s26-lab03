/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
import { SortedIntList } from './hidden/SortedIntListLibrary.js'
import { IntegerList } from './IntegerList.js'

class DelegationSortedIntList {
  /**
   * Underlying SortedIntList that stores the integers using delegation.
   */
  private sortedIntList: SortedIntList
  private totalAdded: number
  
  /**
   * Constructor initializes an empty DelegationSortedIntList.
   */
  constructor() {
    this.sortedIntList = new SortedIntList()
    this.totalAdded = 0
  }

  /**
   * Adds the specified int to the list and increments the totalAdded count.
   *
   * @param num an integer to be added to the list
   * @return true if the list is changed as a result of the call
   */
  public add(num: number): boolean{
    this.totalAdded++
    return this.sortedIntList.add(num)
  }

  public addAll(list: DelegationSortedIntList): boolean {
    let success = true

    for (let i = 0; i < list.size(); i++) {
      success = this.add(list.get(i)) && success
    }

    return success
  }

  public getTotalAdded(): number {
    return this.totalAdded
  }

  public get(index: number): number {
    return this.sortedIntList.get(index)
  }

  public remove(num: number): boolean {
    return this.sortedIntList.remove(num)
  }

  public removeAll(list: DelegationSortedIntList): boolean {
    let success = true

    for (let i = 0; i < list.size(); i++) {
      success = this.remove(list.get(i)) || success
    }

    return success
  }

  public size(): number {
    return this.sortedIntList.size()
  }
}

export { DelegationSortedIntList }
