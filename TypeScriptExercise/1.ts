/*
    Utwórz typy dla studenta oraz nauczyciela.

    Student powinien mieć:
    - imię
    - nazwisko
    - numer indeksu
    - listę zajęć na które uczęszcza
    - listę ocen (może nie posiadać żadnej)
    - informację czy studia skończone

    Nauczyciel powinien mieć:
    - imię
    - nazwisko
    - przedmiot
    - przygotowane egzaminy (których typu nie znamy ;) )
    - funkcję do przeprowadzania egzaminu

    Stwórz również typ dla tablicy, która może zawierać zarówno studentów jak i nauczycieli.
    Stwórz typ na podstawie typu studenta oraz nauczyciela, który pozwoli nam wypisać ich imiona oraz nazwiska.
*/

type Osoba = {
  imie: string;
  nazwisko: string;
};

type Student = Osoba & {
  indeks: number;
  zajecia: string[];
  oceny: number[];
  studia_ukonczone: boolean;
};

type Nauczyciel = Osoba & {
  przedmiot: string;
  egzaminy: unknown[];
  przeprowadzEgzamin: () => void;
};

type TablicaOsob = (Student | Nauczyciel)[];

type ZwrocImionaNazwiska = Pick<Osoba, "imie" | "nazwisko">;
