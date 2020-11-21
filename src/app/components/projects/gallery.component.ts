import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  modalRef: BsModalRef;
  reportBugForm: FormGroup;

  projects: any = [
    {
      id: 1,
      name: 'Cook4You',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/1',
      projectLink: 'https://cook4you.netlify.com',
      alt: 'photo'
    },
    {
      id: 2,
      name: 'DateMe',
      subtext: 'ASP.NET + Angular 9 application',
      img: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      detailsLink: '/projects/details/2',
      projectLink: '',
      alt: 'photo'
    },
    {
      id: 3,
      name: 'Weatherspot',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/3',
      projectLink: 'https://weatherspot.netlify.com',
      alt: 'photo'
    },
    {
      id: 4,
      name: 'Shopanoid',
      subtext: 'wordpress application',
      img: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      detailsLink: '/projects/details/4',
      projectLink: '',
      alt: 'photo'
    },
    {
      id: 5,
      name: 'Budgety',
      subtext: 'angular 9 application',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/5',
      projectLink: 'https://budgety-me.netlify.app',
      alt: 'photo'
    },
    {
      id: 6,
      name: 'Pig Game',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1570303363992-7f95ee20ebdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/6',
      projectLink: 'https://ivilinstoyanov.github.io/pig-game',
      alt: 'photo'
    },
  ];

  constructor(private modalService: BsModalService, private fb: FormBuilder) {
    document.body.style.overflow = 'auto';
  }

  ngOnInit(): void {
    this.createReportBugForm();
  }

  createReportBugForm() {
    this.reportBugForm = this.fb.group({
      project: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog-centered'
      });
  }

  closeModal() {
    this.modalRef.hide();
  }

  reportBug() {
    if (this.reportBugForm.valid) {
      console.log(this.reportBugForm.value);
      this.closeModal();
      this.reportBugForm.reset();
    }
  }
}
