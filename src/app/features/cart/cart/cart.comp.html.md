<!-- Paint the product columns by name and paint the box for the notes. -->

<form [formGroup]="form" [snMarkAsTouched]="form" (ngSubmit)="addCart()">
    <div class="container">
        <div class="row pt-2">
            <div class="col-xl-12 col-12">
                <div class="form-check" *ngFor="let item of items">
                    <input class="form-check-input" type="checkbox" [formControlName]="item" />
                    <span>{{ item }}</span>
                </div>
            </div>
            <label for="notes">Notes:</label>
            <textarea formControlName="note"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </div>
</form>
