import { Injectable } from '@nestjs/common';

interface Cat {
  id: number;
  name: string;
  color: string;
  birthDate: Date;
}

@Injectable()
export class CatService {
  private currentId = 0;
  private cats: Cat[] = [];

  getAll(): Cat[] {
    return this.cats;
  }

  create(cat: any): Cat {
    this.currentId += 1;
    const newCat = {
      id: this.currentId,
      ...cat
    };
    this.cats.push(newCat);
    return newCat;
  }

  getById(id: number): Cat {
    return this.cats.find((cat: Cat) => cat.id === id);
  }

  update(id: number): Cat {
    return this.cats.find((cat: Cat) => cat.id === id);
  }

  delete(id: number): Cat {
    return this.cats.find((cat: Cat) => cat.id === id);
  }
}
