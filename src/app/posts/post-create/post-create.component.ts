import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredName = "";
  enteredDatapoint = "";
  enteredformat_type = "";
  enteredsize="";
  enteredseed="";
  entereddependency="";
  enteredexpression="";
  enteredgroup="";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.Name, form.value.Datapoint, form.value.format_type, form.value.size,  form.value.seed, form.value.dependency, form.value.expression, form.value.group);
    form.resetForm();
  }
}
