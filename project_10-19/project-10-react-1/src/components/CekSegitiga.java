import java.util.Scanner;

public class CekSegitiga {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukan sudut A: ");
        int sudutA = input.nextInt();

        System.out.print("Masukan sudut B: ");
        int sudutB = input.nextInt();

        System.out.print("Masukan sudut C: ");
        int sudutC = input.nextInt();

        int totalSudut = sudutA + sudutB + sudutC;

        if (totalSudut == 180 && sudutA > 0 && sudutB > 0 && sudutC > 0) {
            System.out.println("Keterangan: Ketiga sudut dapat membentuk segitiga valid.");
        } else {
            System.out.println("Keterangan: Ketiga sudut TIDAK dapat membentuk segitiga valid.");
        }

        input.close();
    }
}