import { SortedIntList } from './hidden/SortedIntListLibrary.js'
import { IntegerList } from './IntegerList.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList {
  /**
   * Underlying SortedIntList that stores the integers using inheritance.
   */
  private totalAdded: number
  
  /**
   * Constructor initializes an empty InheritanceSortedIntList.
   */
  constructor() {
    super()
    this.totalAdded = 0
  }
  
  /**
   * Adds the specified int to the list and increments the totalAdded count.
   *
   * @param num an integer to be added to the list
   * @return true if the list is changed as a result of the call
   */
  public override add(num: number): boolean{
    this.totalAdded++
    return super.add(num)
  }

public override addAll(list: IntegerList): boolean {
  return super.addAll(list)
}

  public getTotalAdded(): number {
    return this.totalAdded
  }

}

export { InheritanceSortedIntList }
