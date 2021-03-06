import { Observable, Subject } from "rxjs";
import { ButtonOption } from "../button/button.type";

export interface TreeOption {
    nodeClick?: Subject<any>;
    operations?: TreeOperation[];
    data?: Observable<TreeNode[]>;
    openLevel?: number;
}

export interface TreeNode {
    id: string | number;
    label: string;
    parentId: string | number;
    path: string;
    showChildren?: boolean;
    assist?: string;
}

export interface TreeOperation extends ButtonOption {

}