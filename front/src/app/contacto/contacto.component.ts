import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }
  public submitted = false;
  public listadoCategorias =[];
  public form: FormGroup;
  public enviado = false;
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      nombre: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      id_categoria: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    })
    this.listarCategorias();
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.apiService.agregarContacto(this.form.value)
        .subscribe(data => {
          this.enviado= true;
          this.form.reset();
          this.submitted = false;
        })
    }
  }
  listarCategorias(): void {
      this.apiService.listarCategorias()
        .subscribe(data => {
          this.listadoCategorias = data;
        })
    }
}
