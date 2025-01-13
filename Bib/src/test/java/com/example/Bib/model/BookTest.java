package com.example.Bib.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class BookTest {

    @Test
    void testGetAndSetId() {
        Book book = new Book();
        book.setId(1L);
        assertEquals(1L, book.getId());
    }

    @Test
    void testGetAndSetTitle() {
        Book book = new Book();
        book.setTitle("Test Title");
        assertEquals("Test Title", book.getTitle());
    }

    @Test
    void testGetAndSetAuthor() {
        Book book = new Book();
        book.setAuthor("Test Author");
        assertEquals("Test Author", book.getAuthor());
    }

    @Test
    void testGetAndSetPublisher() {
        Book book = new Book();
        book.setPublisher("Test Publisher");
        assertEquals("Test Publisher", book.getPublisher());
    }

    @Test
    void testIsAndSetAvailable() {
        Book book = new Book();
        book.setAvailable(true);
        assertTrue(book.isAvailable());

        book.setAvailable(false);
        assertFalse(book.isAvailable());
    }

    @Test
    void testDefaultValues() {
        Book book = new Book();
        assertNull(book.getId());
        assertNull(book.getTitle());
        assertNull(book.getAuthor());
        assertNull(book.getPublisher());
        assertFalse(book.isAvailable());
    }
}
