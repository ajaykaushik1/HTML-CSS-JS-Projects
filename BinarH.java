class BinarHeap<T> {

    int root;
    static int[] arr;
    static int size;

    public BinarHeap() {
        arr = new int[50];
        size = 0;
    }

    public void insert(int val) {
        arr[++size] = val;
        bubbleUP(size);
    }

    public void bubbleUP(int i) {

        int parent = (i) / 2;
        while (i > 1 && arr[parent] > arr[i]) {
            int temp = arr[parent];
            arr[parent] = arr[i];
            arr[i] = temp;
            i = parent;
        }

    }

    public int retMin() {

        return arr[1];
    }

    public void removeMin() {
        int minimunValue = 100;
        int index = 0;
        for (int i = 0; i < arr.length; i++) {
            if (minimunValue > arr[i] && arr[i] != 0) {
                minimunValue = arr[i];
                index = i;
            }
        }
        for (int i = 0, j = 0; i < arr.length; i++) {
            if (i == index) {
                continue;
            }
            arr[j++] = arr[i];
        }
    }

    public void removeMax() {
        int maximumValue = 0;
        int index = 0;
        for (int i = 0; i < arr.length; i++) {
            if (maximumValue < arr[i]) {
                maximumValue = arr[i];
                index = i;
            }
        }
        for (int i = 0, j = 0; i < arr.length; i++) {
            if (i == index) {
                continue;
            }
            arr[j++] = arr[i];
        }
    }

    public void print() {

        for (int i = 0; i <= size; i++) {
            System.out.print(arr[i] + " ");

        }

    }
}

public class BinarH {

    public static void main(String[] args) {

        BinarHeap Heap1 = new BinarHeap();

        Heap1.insert(12);
        Heap1.insert(9);
        Heap1.insert(24);
        Heap1.insert(4);
        Heap1.insert(71);

        // print inorder traversal of the BH
        System.out.printf("My Binar Heap:%n");
        Heap1.print();
        System.out.printf("%n%nCall Min:%n[%d]", Heap1.retMin());

        System.out.printf("%n%nAfter remove Min:%n");
        Heap1.removeMin();
        Heap1.print();

        System.out.printf("%n%nAfter remove Max:%n");
        Heap1.removeMax();
        Heap1.print();
    }
}
