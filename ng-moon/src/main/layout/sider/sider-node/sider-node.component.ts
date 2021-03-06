import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: '[nm-sider-node]',
  templateUrl: './sider-node.component.html',
  encapsulation: ViewEncapsulation.None,
  inputs: ["option", "level"]
})
export class SiderNodeComponent implements OnInit {

  // 输入-菜单数据
  option: any = {};

  // 输入-当前层级
  level: number;

  // 输出-点击节点
  // nodeEmit = new EventEmitter<object>();

  // 子节点
  child = [];

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.level = this.level + 1;
    this.child = this.layoutService.menus.filter((x) => x.parentId === this.option.id);
  }

  /**
   * 节点展开
   * 
   * @param {Event} event 
   * @param {any} option 
   * @memberof SiderNodeComponent
   */
  toggle(event: Event, option) {
    event.stopPropagation();
    if (this.child.length > 0) option.childrenShow = !option.childrenShow;
  }

}
