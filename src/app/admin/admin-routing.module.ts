import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes : Routes = [
    {path: 'admin', component: ProjectComponent, children: [
        {path: 'list', component:ProjectListComponent},
        {path: 'create', component:ProjectCreateComponent},
        {path: 'update', component:ProjectUpdateComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}