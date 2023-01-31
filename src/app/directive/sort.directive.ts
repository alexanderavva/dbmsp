import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../utils/sort';


@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any> | undefined;
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    // Create Object of Sort Class
    const sort = new Sort();
    // Get Reference Of Current Clicked Element
    const elem = this.targetElem.nativeElement;
    // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
    const order = elem.getAttribute("data-order");
    // Get The Property Type specially set [data-type=date] if it is date field
    const type = elem.getAttribute("data-type");
    // Get The Property Name from Element Attribute
    const property = elem.getAttribute("data-name");
    if (order === "desc") {
      // @ts-ignore
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    }
    else {
      // @ts-ignore
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
    }
  }
}
/*
When you click on any table header following things are happening concurrently

So when you pass list in [appSort], SortDirective stores that list in appSort.
It will create an object of Sort class.
The header, we are clicking on is stored in targetElem. So, store element reference in elem variable.
Now get the initial order of that header using getAttribute(“data-order”) method and store it in order variable.
Now get the property type of that header using getAttribute(“data-type”) method and store it in type variable.
Now get the property name that needs to be sorted in that list using getAttribute(“data-name”) and store it in property variable.
Now call the sort method of that list which accepts an optional argument which is a function that compares two elements of the array. Now call startSort method of Sort class which will take the property, order, and type as an argument.
Now in the targetElem set the data-order exactly opposite of the current order.
 */
